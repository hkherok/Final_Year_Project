from django.db.models import fields
from rest_framework import serializers
from user_address.models import (
    Upazila, 
    District, 
    Division, 
    Address)

class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = ['id', 'name']

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = ['id', 'name', 'division']

class UpazilaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Upazila
        fields = ['id', 'name', 'district']

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'street', 'post_office', 'postal_code', 'upazila', 'district', 'division']
