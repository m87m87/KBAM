# Generated by Django 5.0.2 on 2024-06-07 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tocapturecomments', '0003_rename_end_tocapturecomments_end_date_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comments', models.CharField(max_length=10000)),
            ],
        ),
    ]
