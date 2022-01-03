"""agri_calculator_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from user_profile.views import RegisterApi
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    #path('admin/main', include('admin_main.urls')),
    path('api/user/address/', include('user_address.urls')),
    path('api/user/profile/', include('user_profile.urls')),
    path('api/user/', include('user.urls')),
    path('api/desease/', include('desease.urls')),
    path('api/calculation/', include('calc_history.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterApi.as_view()),
    path('', admin.site.urls),
    #path('admin/', admin.site.urls),
    #path('user/', include('user.urls')),
]
