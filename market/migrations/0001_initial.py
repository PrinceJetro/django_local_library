# Generated by Django 4.1.7 on 2023-02-22 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gadget',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imgLink', models.CharField(max_length=2000)),
                ('name', models.CharField(max_length=25)),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='mostSold',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imgLink', models.CharField(max_length=2000)),
                ('name', models.CharField(max_length=25)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
