from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# Create your models here.

class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('User must have an username')

        user = self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(email=self.normalize_email(email), password=password, username=username)

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User_model(AbstractBaseUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True)
    phone = models.CharField(max_length=20, unique=True, null=True)
    address = models.TextField(max_length=300, null=True)
    status = models.IntegerField(null=True)
    verification_code = models.IntegerField(null=True)
    create_at = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    update_at = models.DateTimeField(verbose_name='last login', auto_now=True, null=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    image = models.ImageField(upload_to='image/user_pic/%y/%m/%d')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', ]

    object = MyAccountManager()

    def delete(self, *args, **kwargs):
        # first, delete the file
        self.image.delete(save=False)

        # now, delete the object
        super(User_model, self).delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        try:
            this = User_model.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete()
        except:
            pass
        super(User_model, self).save(*args, **kwargs)

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True
from django.db import models

# Create your models here.
class problem(models.Model):
    image = models.ImageField(upload_to="image",blank=True)





