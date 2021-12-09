from rest_framework import serializers
from desease.models import Desease

class DeseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desease
        fields = [
            'id', 
            'title',
            'photo',
            'description'
            ]
