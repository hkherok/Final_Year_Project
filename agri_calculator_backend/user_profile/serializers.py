from rest_framework import serializers
from user_profile.models import Profile
from rest_framework import  serializers
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id','username','password', 'email', 'full_name']
        extra_kwargs = {
            'password':{'write_only': True},
        }
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],     
            password = validated_data['password'],
            email = validated_data['email'],  
            first_name = validated_data['full_name'])
        return user

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
