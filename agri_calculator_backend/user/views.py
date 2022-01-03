from user_profile.serializers import RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    #permission_classes = [IsAuthenticated]


class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    #permission_classes = [IsAuthenticated]