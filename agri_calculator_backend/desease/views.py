from desease.models import Desease
from desease.serializers import DeseaseSerializer
from rest_framework import generics

class DeseaseList(generics.ListCreateAPIView):
    queryset = Desease.objects.all()
    serializer_class = DeseaseSerializer


class DeseaseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Desease.objects.all()
    serializer_class = DeseaseSerializer