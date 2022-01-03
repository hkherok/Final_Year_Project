from calc_history.models import CalcResult
from calc_history.serializers import CalcResultSerializer
from rest_framework import filters, generics
from rest_framework.permissions import IsAuthenticated

class CalcResultList(generics.ListCreateAPIView):
    queryset = CalcResult.objects.all()
    serializer_class = CalcResultSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['user_name']
    permission_classes = [IsAuthenticated]


class CalcResultDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CalcResult.objects.all()
    serializer_class = CalcResultSerializer
    permission_classes = [IsAuthenticated]