from django.contrib import admin

# Register your models here.
from calc_history.models import CalcResult

admin.site.register(CalcResult)