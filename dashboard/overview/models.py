# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class ImportStatus(models.Model):
    cancer_study_identifier = models.CharField(max_length = 50)
    import_date = models.DateTimeField()
    import_status = models.BooleanField()
    import_details = models.TextField()
    db_server_url = models.CharField(max_length = 50)
    db_name = models.CharField(max_length = 50)
    cbio_base_url = models.CharField(max_length = 100)

