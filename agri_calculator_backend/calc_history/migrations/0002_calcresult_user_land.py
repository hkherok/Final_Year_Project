# Generated by Django 4.0 on 2021-12-26 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calc_history', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='calcresult',
            name='user_land',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]