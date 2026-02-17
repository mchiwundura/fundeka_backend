from django.db import models


class Course(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    title = models.TextField()
    color = models.TextField()
    icon = models.TextField()
    level = models.TextField()
    examination_body = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Lesson(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    title = models.TextField()
    description = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    audio = models.TextField(blank=True, null=True)
    order = models.IntegerField()

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="lessons"
    )

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Concept(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    title = models.TextField()
    outcome = models.TextField(blank=True, null=True)
    order = models.IntegerField()

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        related_name="concepts"
    )

    parent = models.ForeignKey(
        "self",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="children"
    )

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Flashcard(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    front = models.TextField()
    back = models.TextField()
    difficulty = models.IntegerField()

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        related_name="flashcards"
    )

    concept = models.ForeignKey(
        Concept,
        on_delete=models.CASCADE,
        related_name="flashcards"
    )

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Flashcard {self.id}"


class Question(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    question = models.TextField()
    answer = models.TextField()
    type = models.TextField()
    source = models.TextField(blank=True, null=True)
    difficulty = models.IntegerField()

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        related_name="questions"
    )

    concept = models.ForeignKey(
        Concept,
        on_delete=models.CASCADE,
        related_name="questions"
    )

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Question {self.id}"


class CalendarEvent(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    title = models.TextField()
    start = models.DateField()
    end = models.DateField()

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="calendar_events"
    )

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

