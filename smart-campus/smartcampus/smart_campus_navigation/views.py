# smart_campus_navigation/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests

def home(request):
    return JsonResponse({"message": "Bienvenue sur l'API Smart Campus 🎓"})

OLLAMA_API_URL = "http://localhost:11434/api/generate"

@csrf_exempt
def ask_bot(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            prompt = data.get("prompt")

            ollama_response = requests.post(OLLAMA_API_URL, json={
                "model": "mistral:latest",
                "prompt": f"CAMPUS_NAV_PROMPT: {prompt}",
                "stream": False
            })

            if ollama_response.status_code == 200:
                answer = ollama_response.json().get("response", "Pas de réponse")
                return JsonResponse({"response": answer})
            else:
                return JsonResponse({"response": "Erreur depuis Ollama"}, status=500)
        except Exception as e:
            return JsonResponse({"response": f"Erreur serveur Django: {str(e)}"}, status=500)

    return JsonResponse({"response": "Méthode non autorisée"}, status=405)
