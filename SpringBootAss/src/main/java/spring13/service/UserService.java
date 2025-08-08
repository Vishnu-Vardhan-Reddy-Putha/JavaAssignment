package com.spring13.service;

import com.spring13.model.User;
import com.spring13.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return repository.findById(id);
    }

    public User createUser(User user) {
        return repository.save(user);
    }

    public Optional<User> updateUser(Long id, User updatedUser) {
        return repository.findById(id).map(user -> {
            user.setName(updatedUser.getName());
            user.setAge(updatedUser.getAge());
            user.setSalary(updatedUser.getSalary());
            return repository.save(user);
        });
    }

    public boolean deleteUser(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
