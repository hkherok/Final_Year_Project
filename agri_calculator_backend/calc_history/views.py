from calc_history.models import CalcResult
from calc_history.serializers import CalcResultSerializer
from rest_framework import generics

class CalcResultList(generics.ListCreateAPIView):
    queryset = CalcResult.objects.all()
    serializer_class = CalcResultSerializer


class CalcResultDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CalcResult.objects.all()
    serializer_class = CalcResultSerializer