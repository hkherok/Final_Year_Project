from desease.models import Desease
from desease.serializers import DeseaseSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class DiseaseList(generics.ListCreateAPIView):
    queryset = Desease.objects.all()
    serializer_class = DeseaseSerializer
    permission_classes = [IsAuthenticated]

class DiseaseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Desease.objects.all()
    serializer_class = DeseaseSerializer
    permission_classes = [IsAuthenticated]