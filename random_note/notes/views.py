from django.shortcuts import render
from .models import User

def home(request):
    return render(request, 'home.html')

def notes(request):
    return render(request, 'notes.html')

def users(request):
    users = User.objects.all().values()
    return render(request, 'users.html', context={
        'users': users
    })

def user_details(request, id):
    user = User.objects.get(id=id)
    return render(request, 'user_details.html', context={
        'user': user
    })
