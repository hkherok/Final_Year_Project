from rest_framework import serializers
from calc_history.models import CalcResult

class CalcResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalcResult
        fields = [
            'id', 
            'user_name',
            'user_land',
            'urea',
            'tsp',
            'mop',
            'gipsam',
            'zinc',
            'user',
            ]
