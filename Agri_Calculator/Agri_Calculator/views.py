from django.contrib import messages , auth
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password
from django.http import HttpResponseRedirect
from django.shortcuts import render

from .models import User_model, problem


def dashbord(request):
    return render(request,'index.html')

def singin(request):
    trashOldMsg(request)
    return render(request,'sign_in.html')


def loginuser(request):
    if  request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        if email  and password :
            user = auth.authenticate(username=email,password=password)
            if user:
                if user.is_active:
                    auth.login(request,user)
                    trashOldMsg(request)
                    messages.error(request,' welcome'+ user.username+ 'you are loggin in')
                    context = {
                        'authMsg':'login',
                        'context_instance':request
                    }

                    #new cart

                    return render(request, 'dashboard.html',
                                  )






                trashOldMsg(request)
                messages.error(request,'Account is no active .place check your emil')
                return render(request,'sign_in.html')
            trashOldMsg(request)
            messages.error(request,'invalid password place try again')
            return render(request,'sign_in.html')
        trashOldMsg(request)
        messages.error(request,'place fill all fields')
        return render(request,'sign_in.html')
    else:
        return render(request,'dashboard.html',{'user':request.user})


@login_required(login_url='/user/sing/')

def logoutuser(request):
    if request.method == 'POST':
        logout(request)
        trashOldMsg(request)

        messages.error(request,'Log out successful')
        context = {
            'authMsg':'logout',

        }

        return render(request,'dashboard.html')
    else:
        return HttpResponseRedirect('/')


def sing_up(request):
    if request.method == "GET":
        all_users = User_model.object.all()
        print(all_users)
        return render(request,'Sign_up.html')
    else:
        name = request.POST['name']
        username = request.POST['username']
        email = request.POST ['email']
        password = request.POST['password']
        con_password = request.POST['password2']

        if len(password) > 6:
            if password == con_password:
                create_user = User_model(name=name,email=email,username=username,password=password)
                create_user.password = make_password(create_user.password)
                if User_model.object.filter(email=email).exists():
                    trashOldMsg(request)
                    messages.error(request,'your email is already username')
                    return render(request,'sign_up.html')
                else:
                    trashOldMsg(request)
                    messages.success(request,'Account create successful')
                    create_user.save()
                    print('password action')

            else:
                print('password not match')
        trashOldMsg(request)
        messages.error(request, 'password not match')
        return render(request,'Sign_up.html')


def blog(request):
    return render(request,'blog.html')

def contuct_us(request):
    return render(request,'contuct us.html')

def message(request):
    return render (request,'message.html')
def website(request):
    return render(request,'website.html')

def total_service(request):
    return render(request,'Total_service.html')

def register(request):
    return render(request,'register member.html')




def Problem(request):
    obj = problem.objects.all()
    return render(request,'problem.html',{'obj':obj})

def Attention(request):
    return render(request,'Attention.html')

def problem1(request):
    return render(request,'problem/problem1.html')
def problem2(request):
    return render(request,'problem/problem2.html')

def problem3(request):
    return render(request,'problem/problem3.html')

def problem4(request):
    return render(request,'problem/problem4.html')
def problem5(request):
    return render(request,'problem/problem5.html')

def problem6(request):
    return render(request,'problem/problem6.html')
def problem7(request):
    return render(request,'problem/problem7.html')




















def index(request):
    return render(request,'index.html')



def trashOldMsg(req):
    storage = messages.get_messages(req)
    storage.user = True
    for _ in storage:
        pass
    for _ in list(storage._loaded_messages):
        del storage._loaded_messages[0]