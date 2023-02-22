from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import mostSold, Gadget
from django.contrib import messages
from django.contrib.auth.models import User, auth

# Create your views here.

def register(request):
    if request.method == 'POST':
        user_name = request.POST['username']
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        email = request.POST['email']
        password1 = request.POST['psw']
        password2 = request.POST['psw-repeat']


        if password1 == password2:
            if User.objects.filter(username=user_name).exists():
                messages.info(request, "UserName Taken")
                return redirect('register')
            elif User.objects.filter(email=email).exists():
                messages.info(request, "Email Taken")
                return redirect('register')
            else:
                user = User.objects.create_user(username = user_name,first_name=first_name,last_name=last_name, email=email, password= password1 )
                user.save()

        else:
            messages.info(request, "Password not matching")
            return redirect('register')
        return redirect("login")
    else:
        return  render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        print("here ooo")
        username = request.POST['username']
        password = request.POST['password']


        user = auth.authenticate(username=username, password=password)

        if user is not None:
            print("not none")
            auth.login(request, user)
            return redirect('/')
        else:
            print(" none")
            messages.info(request, "Invalid Credentials")
            return redirect('login')
    else:
        return render(request, "login.html")


def logout(request):
    auth.logout(request)
    return redirect('register')

def home(request):

    mostSoldItems = mostSold.objects.all()

    return  render(request, 'index.html', {"mostSoldItems" : mostSoldItems})

def Gadgets(request):
    gadget = Gadget.objects.all() 
    
    return render(request, 'gadget.html', {'gadget': gadget})


