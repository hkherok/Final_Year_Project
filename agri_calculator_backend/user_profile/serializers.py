from django.db.models import fields
from rest_framework import serializers
from user_profile.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'id', 
            'full_name', 
            'cellphone', 
            'email', 
            'nid',
            'birth_reg_no', 
            'date_of_birth', 
            'age',
            'gender',
            'nationality',
            'blood_group',
            'maritial_status',
            'photo',
            'address',
            'created_on',
            'created_by',
            'modified_on',
            'modified_by'
            ]
