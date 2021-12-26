from django.db import models

# Create your models here.
class CalcResult(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user_name = models.CharField(max_length=100, blank=True, default='')
    user_land = models.CharField(max_length=100, blank=True, default='')
    urea = models.CharField(max_length=100, blank=True, default='')
    tsp = models.CharField(max_length=100, blank=True, default='')
    mop = models.CharField(max_length=100, blank=True, default='')
    gipsam = models.CharField(max_length=100, blank=True, default='')
    zinc = models.CharField(max_length=100, blank=True, default='')
    user = models.IntegerField(default=0)

    def __str__(self):
            return "%s the calculation history" % self.user_name

    class Meta:
        ordering = ['created']