from user_address.models import (
    Division,
    District,
    Upazila,
    Address
)
from user_address.serializers import (
    DivisionSerializer,
    DistrictSerializer,
    UpazilaSerializer,
    AddressSerializer
)
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#---------------Division API---------------#
class DivisionList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        divisions = Division.objects.all()
        serializer = DivisionSerializer(divisions, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DivisionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DivisionDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Division.objects.get(pk=pk)
        except Division.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        division = self.get_object(pk)
        serializer = DivisionSerializer(division)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        division = self.get_object(pk)
        serializer = DivisionSerializer(division, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        division = self.get_object(pk)
        division.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#-----------------End Division---------------#

#---------------District API---------------#
class DistrictList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        districts = District.objects.all()
        serializer = DistrictSerializer(districts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DistrictSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DistrictDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return District.objects.get(pk=pk)
        except District.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        district = self.get_object(pk)
        serializer = DistrictSerializer(district)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        district = self.get_object(pk)
        serializer = DistrictSerializer(district, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        district = self.get_object(pk)
        district.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#-----------------End District---------------#

#---------------Upazila API---------------#
class UpazilaList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        upazilas = Upazila.objects.all()
        serializer = UpazilaSerializer(upazilas, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UpazilaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UpazilaDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Upazila.objects.get(pk=pk)
        except Upazila.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        upazila = self.get_object(pk)
        serializer = UpazilaSerializer(upazila)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        upazila = self.get_object(pk)
        serializer = UpazilaSerializer(upazila, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        upazila = self.get_object(pk)
        upazila.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#-----------------End Upazila---------------#

#---------------Address API---------------#
class AddressList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        addresses = Address.objects.all()
        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddressDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Address.objects.get(pk=pk)
        except Address.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        address = self.get_object(pk)
        serializer = AddressSerializer(address)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        address = self.get_object(pk)
        serializer = AddressSerializer(address, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        address = self.get_object(pk)
        address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#-----------------End Address---------------#