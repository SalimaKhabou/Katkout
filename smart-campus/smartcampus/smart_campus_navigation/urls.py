# smart_campus_navigation/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # path('generate-response/', views.generate_response, name='generate_response'),
    path('', views.home, name='home'),
    path('api/ask', views.ask_bot,name='ask_bot'),
    path('get-location-info', views.get_location_info, name='get_location_info'),
]

