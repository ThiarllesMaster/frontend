package com.biblioteca.bibliotecabackend.repo;

import com.biblioteca.bibliotecabackend.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepo extends JpaRepository<Livro, Long> {


}
