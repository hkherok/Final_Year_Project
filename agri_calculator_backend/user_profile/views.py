from rest_framework import filters
from rest_framework.views import APIView
from user_profile.models import Profile
from user_profile.serializers import ProfileSerializer, RegisterSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, permissions, mixins
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.http import Http404
from rest_framework import status

class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email']
    permission_classes = [IsAuthenticated]

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

#Register API
class UserPost(APIView):
    def post(self, request, format=None):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        UserPost.post(user, request)
        return Response({
            "profile": ProfileSerializer(user, context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })