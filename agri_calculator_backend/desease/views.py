from desease.models import Desease
from desease.serializers import DeseaseSerializer
from rest_framework import generics

class DiseaseList(generics.ListCreateAPIView):
    queryset = Desease.objects.all()
    serializer_class = DeseaseSerializer


class DiseaseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Desease.objects.all()
    serializer_class = DeseaseSerializer
    