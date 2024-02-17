# Generated by Django 4.0 on 2024-02-07 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0014_alter_profile_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='birth_registration_number',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='nid',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
