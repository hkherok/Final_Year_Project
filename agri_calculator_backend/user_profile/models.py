from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

from user_address.models import Address

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])

class Profile(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    full_name = models.CharField(max_length=100, blank=True, default='')
    cellphone = models.CharField(max_length=20, blank=True, default='')
    email = models.CharField(max_length=100, blank=True, default='')
    nid = models.CharField(max_length=20, blank=True, default='')
    birth_reg_no = models.CharField(max_length=20, blank=True, default='')
    date_of_birth = models.DateField(auto_now=True, auto_now_add=False)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, blank=True, default='')
    nationality = models.CharField(max_length=20, blank=True, default='')
    blood_group = models.CharField(max_length=5, blank=True, default='')
    maritial_status = models.CharField(max_length=20, blank=True, default='')
    photo = models.ImageField(default=None, upload_to=None, height_field=None, width_field=None, max_length=100)
    address = models.OneToOneField(to=Address, on_delete=models.CASCADE, parent_link=False)
    created_on = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_by = models.CharField(max_length=100, blank=True, default='')
    modified_on = models.DateTimeField(auto_now=True, auto_now_add=False)
    modified_by = models.CharField(max_length=100, blank=True, default='')

    def __str__(self):
        return "%s the profile" % self.name

    class Meta:
        ordering = ['created']