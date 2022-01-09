package com.biblioteca.bibliotecabackend.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Livro implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;

    private String titulo;
    private String categoria;
    private Integer exemplares;
    private Integer exemplares_disponiveis;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(final String titulo) {
        this.titulo = titulo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(final String categoria) {
        this.categoria = categoria;
    }

    public Integer getExemplares() {
        return exemplares;
    }

    public void setExemplares(final Integer exemplares) {
        this.exemplares = exemplares;
    }

    public Integer getExemplares_disponiveis() {
        return exemplares_disponiveis;
    }

    public void setExemplares_disponiveis(final Integer exemplares_disponiveis) {
        this.exemplares_disponiveis = exemplares_disponiveis;
    }
}
