# Singleton Design Pattern

The Singleton design pattern is a creational pattern that ensures a class has only one instance and provides a global point of access to it. In other words, it restricts the instantiation( Instantiation is the process of creating an instance (or object) from a class. ) of a class to one object.
The key characteristics of the Singleton pattern are:

- Single Instance: The class can have only one instance at a time.

- Global Access Point: The single instance is accessible globally through a single well-known access point.

- Lazy Initialization: The instance is created only when it is first requested, not at the time of class loading.

- Thread-safe: The implementation ensures that the instance is created in a thread-safe manner, preventing multiple instances from being created by different threads.

# Instance

An object created from a class.

In object-oriented programming, a class is a blueprint or a template that defines the structure and behavior of objects. An instance, or an object, is a specific realization of that class.

- - In simple terms, an instance is just an object.

When we say "instance of a class", we are referring to an object that has been created based on the blueprint defined by that class.
So an instance and an object are essentially the same thing. They are different words used to describe the same concept from different perspectives:

Instance refers to the relationship between the object and its class. It denotes that the object is a concrete realization or instantiation of the class definition.
Object refers to the actual run-time entity itself, with its own state (property values) and behavior (methods).

So in easy words:

- - An instance is an object.
- - An object is an instance of a class.

They are two sides of the same coin. The word "instance" emphasizes the object's relationship to its class, while the word "object" refers to the self-contained run-time entity.

### An instance is nothing but an object created from a class blueprint or definition.

## Thread

A thread is a path of execution within a program, and modern software applications often have multiple threads running concurrently to improve performance and responsiveness. However, when multiple threads access and modify shared resources (such as variables, objects, or files) without proper synchronization, it can lead to unpredictable and incorrect results.

### A thread is a path of execution within a process. It is a lightweight unit of processing that allows a single process to perform multiple tasks concurrently.

## Thread-safety

Thread-safety is a concept in computer programming that deals with ensuring that a resource or piece of code can be accessed safely by multiple threads concurrently without causing data corruption, race conditions, or other unexpected behaviors.

For a resource or piece of code to be thread-safe, it means that it can be accessed and modified by multiple threads simultaneously without causing any issues.
