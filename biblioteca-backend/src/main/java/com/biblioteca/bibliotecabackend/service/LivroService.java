package com.biblioteca.bibliotecabackend.service;

import com.biblioteca.bibliotecabackend.model.Livro;
import com.biblioteca.bibliotecabackend.repo.LivroRepo;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class LivroService {

    private LivroRepo livroRepo;

    LivroService(LivroRepo livroRepo) {
        this.livroRepo = livroRepo;
    }

    public Livro adicionarLivro(Livro livro) {
        return livroRepo.save(livro);
    }

    public List<Livro> buscarTodosOsLivros() {
        return livroRepo.findAll();
    }
}
