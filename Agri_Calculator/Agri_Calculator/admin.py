from django.contrib import admin

# Register your models here.
from .models import problem, User_model

admin.site.register(problem)
admin.site.register(User_model)