from django.db import models

class Desease(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    photo = models.CharField(max_length=200, blank=True, default='')
    description = models.CharField(max_length=50000, blank=True, default='')

    def __str__(self):
        return "%s the profile" % self.title

    class Meta:
        ordering = ['created']