# smart_campus_navigation/views.py
from django.http import JsonResponse
from .main import get_response  # Assure-toi que main.py est bien dans le même répertoire

def generate_response(request):
    # Récupérer le 'prompt' envoyé par l'utilisateur via la requête GET
    prompt = request.GET.get('prompt', '')
    
    # Vérifier si le prompt est fourni
    if prompt:
        # Appeler la fonction get_response pour obtenir la réponse à la demande
        response_data = get_response(prompt)
        return JsonResponse({'response': response_data})
    else:
        return JsonResponse({'error': 'No prompt provided.'}, status=400)



def home(request):
    return JsonResponse({"message": "Bienvenue sur l'API Smart Campus 🎓"})
