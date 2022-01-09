package com.biblioteca.bibliotecabackend.api;

import com.biblioteca.bibliotecabackend.model.Livro;
import com.biblioteca.bibliotecabackend.service.LivroService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/livro")
public class LivroResource {

    @Autowired
    private LivroService livroService;

    @PostMapping
    public ResponseEntity<Livro> adicionarLivro(@RequestBody Livro livro) {
        Livro newLivro = livroService.adicionarLivro(livro);
        return new ResponseEntity<>(newLivro, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Livro>> buscarTodosLivros() {
        List<Livro> todosOsLivros = livroService.buscarTodosOsLivros();
        return new ResponseEntity<>(todosOsLivros, HttpStatus.OK);
    }

}
