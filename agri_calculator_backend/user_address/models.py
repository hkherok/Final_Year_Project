from django.db import models

class Division(models.Model):
    id = models.PositiveIntegerField(primary_key=True)    
    name = models.CharField(max_length=30, blank=True, default='')

    def __str__(self):
        return "%s the division" % self.name
    
    class Meta:
        ordering = ['id']

class District(models.Model):
    id = models.PositiveIntegerField(primary_key=True)    
    name = models.CharField(max_length=30, blank=True, default='')
    division = models.ForeignKey(to=Division, on_delete=models.CASCADE, parent_link=False)

    def __str__(self):
        return "%s the district" % self.name
    
    class Meta:
        ordering = ['id']

class Upazila(models.Model):
    id = models.PositiveIntegerField(primary_key=True)    
    name = models.CharField(max_length=30, blank=True, default='')
    district = models.ForeignKey(to=District, on_delete=models.CASCADE, parent_link=False)

    def __str__(self):
        return "%s the upazila" % self.name
    
    class Meta:
        ordering = ['id']

class Address(models.Model):
    created = models.DateTimeField(auto_now_add=True)   
    street = models.CharField(max_length=30, blank=True, default='')
    post_office = models.CharField(max_length=30, blank=True, default='')
    postal_code = models.CharField(max_length=30, blank=True, default='')
    upazila = models.CharField(max_length=30, blank=True, default='')
    district = models.CharField(max_length=30, blank=True, default='')
    division = models.CharField(max_length=30, blank=True, default='')

    def __str__(self):
        return "%s the address" % self.postal_code

    class Meta:
        ordering = ['created']