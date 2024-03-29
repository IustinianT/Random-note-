from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('notes/', views.notes, name='notes'),
    path('users/', views.users, name='users'),
    path('users/user_details/<int:id>', views.user_details, name='user_details'),
]
