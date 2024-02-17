from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from user_address.models import Address
from django.db import models

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])

class Profile(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=100, blank=True, default='')
    password = models.CharField(max_length=100, blank=True, default='')
    full_name = models.CharField(max_length=100, blank=True, default='')
    cellphone = models.CharField(max_length=20, blank=True, default='')
    email = models.EmailField(max_length=100, blank=True, default='')
    gender = models.CharField(max_length=10, blank=True, default='')
    photo = models.ImageField(upload_to='static/profile_photos', blank=True, null=True)
    address = models.CharField(max_length=20, blank=True, default='')
    is_active = models.BooleanField(default=True)
    user = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    nid = models.CharField(max_length= 255, blank=True,null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    birth_registration_number = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return "%s the profile" % self.full_name

    class Meta:
        ordering = ['created']