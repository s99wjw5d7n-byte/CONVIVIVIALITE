#!/usr/bin/env python3
"""
Éditeur de contenu pour le site web sur la convivialité urbaine.
Ce script permet de modifier facilement le contenu du site sans avoir à éditer directement les fichiers JSON.
"""

import json
import os
import sys
import tempfile
import subprocess

# Chemin vers le fichier de contenu JSON
CONTENT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src', 'content.json')

def load_content():
    """Charge le contenu du fichier JSON"""
    try:
        with open(CONTENT_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Erreur : Le fichier {CONTENT_FILE} n'existe pas.")
        sys.exit(1)
    except json.JSONDecodeError:
        print(f"Erreur : Le fichier {CONTENT_FILE} n'est pas un JSON valide.")
        sys.exit(1)

def save_content(content):
    """Sauvegarde le contenu dans le fichier JSON"""
    try:
        with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
            json.dump(content, f, ensure_ascii=False, indent=2)
        print(f"Contenu sauvegardé avec succès dans {CONTENT_FILE}")
    except Exception as e:
        print(f"Erreur lors de la sauvegarde : {e}")
        sys.exit(1)

def edit_text_field(content, path):
    """Édite un champ texte spécifique dans le contenu"""
    # Navigue dans la structure JSON pour trouver le champ à éditer
    current = content
    for i, key in enumerate(path[:-1]):
        if isinstance(current, dict) and key in current:
            current = current[key]
        elif isinstance(current, list) and key.isdigit() and int(key) < len(current):
            current = current[int(key)]
        else:
            print(f"Erreur : Chemin invalide {'.'.join(path[:i+1])}")
            return content

    # Vérifie si le dernier élément du chemin existe
    last_key = path[-1]
    if isinstance(current, dict) and last_key in current:
        # Affiche la valeur actuelle
        print(f"\nValeur actuelle de {'.'.join(path)} :")
        print(f"\"{current[last_key]}\"")
        
        # Demande la nouvelle valeur
        print("\nEntrez la nouvelle valeur (laissez vide pour conserver la valeur actuelle) :")
        new_value = input("> ")
        
        if new_value:
            current[last_key] = new_value
            print(f"Valeur mise à jour avec succès.")
    else:
        print(f"Erreur : Champ {last_key} introuvable dans {'.'.join(path[:-1])}")
    
    return content

def edit_with_editor(content):
    """Édite tout le contenu JSON dans un éditeur de texte"""
    # Crée un fichier temporaire
    with tempfile.NamedTemporaryFile(suffix='.json', mode='w+', delete=False) as temp:
        temp_filename = temp.name
        # Écrit le contenu JSON formaté dans le fichier temporaire
        json.dump(content, temp, ensure_ascii=False, indent=2)
    
    # Détermine l'éditeur à utiliser
    editor = os.environ.get('EDITOR', 'nano')
    
    try:
        # Ouvre l'éditeur avec le fichier temporaire
        subprocess.call([editor, temp_filename])
        
        # Lit le contenu modifié
        with open(temp_filename, 'r', encoding='utf-8') as f:
            try:
                modified_content = json.load(f)
                return modified_content
            except json.JSONDecodeError as e:
                print(f"Erreur : Le JSON modifié n'est pas valide. {e}")
                return content
    finally:
        # Supprime le fichier temporaire
        os.unlink(temp_filename)

def list_editable_fields(content, prefix=''):
    """Liste tous les champs texte éditables dans le contenu"""
    fields = []
    
    if isinstance(content, dict):
        for key, value in content.items():
            new_prefix = f"{prefix}.{key}" if prefix else key
            if isinstance(value, (dict, list)):
                fields.extend(list_editable_fields(value, new_prefix))
            elif isinstance(value, str):
                fields.append((new_prefix, value))
    elif isinstance(content, list):
        for i, item in enumerate(content):
            new_prefix = f"{prefix}.{i}"
            if isinstance(item, (dict, list)):
                fields.extend(list_editable_fields(item, new_prefix))
    
    return fields

def display_menu():
    """Affiche le menu principal"""
    print("\n=== ÉDITEUR DE CONTENU - SITE CONVIVIALITÉ URBAINE ===")
    print("1. Éditer un champ spécifique")
    print("2. Éditer tout le contenu dans un éditeur de texte")
    print("3. Lister tous les champs éditables")
    print("4. Sauvegarder et quitter")
    print("5. Quitter sans sauvegarder")
    return input("\nChoisissez une option (1-5) : ")

def main():
    """Fonction principale"""
    print("Chargement du contenu...")
    content = load_content()
    modified = False
    
    while True:
        choice = display_menu()
        
        if choice == '1':
            # Éditer un champ spécifique
            print("\nEntrez le chemin du champ à éditer (ex: home.hero.title) :")
            path = input("> ").split('.')
            content = edit_text_field(content, path)
            modified = True
        
        elif choice == '2':
            # Éditer tout le contenu dans un éditeur de texte
            print("\nOuverture de l'éditeur de texte...")
            new_content = edit_with_editor(content)
            if new_content != content:
                content = new_content
                modified = True
                print("Contenu modifié avec succès.")
            else:
                print("Aucune modification détectée.")
        
        elif choice == '3':
            # Lister tous les champs éditables
            print("\nListe des champs éditables :")
            fields = list_editable_fields(content)
            for i, (path, value) in enumerate(fields, 1):
                # Tronque la valeur si elle est trop longue
                display_value = value[:50] + "..." if len(value) > 50 else value
                print(f"{i}. {path}: \"{display_value}\"")
            
            # Option pour éditer un champ de la liste
            print("\nEntrez le numéro du champ à éditer (ou 0 pour revenir au menu) :")
            field_choice = input("> ")
            if field_choice.isdigit() and 1 <= int(field_choice) <= len(fields):
                path = fields[int(field_choice) - 1][0].split('.')
                content = edit_text_field(content, path)
                modified = True
        
        elif choice == '4':
            # Sauvegarder et quitter
            if modified:
                save_content(content)
            print("Au revoir !")
            break
        
        elif choice == '5':
            # Quitter sans sauvegarder
            if modified:
                confirm = input("Des modifications ont été effectuées. Êtes-vous sûr de vouloir quitter sans sauvegarder ? (o/n) : ")
                if confirm.lower() != 'o':
                    continue
            print("Au revoir !")
            break
        
        else:
            print("Option invalide. Veuillez réessayer.")

if __name__ == "__main__":
    main()

