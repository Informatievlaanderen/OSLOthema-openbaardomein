# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Openbaar Domain Model: Tags `ap-definition-nl` and `ap-label-nl` to GBIFcode 

### Changed

- Openbaar Domain Model: PascalCase and CamelCase
- Openbaar Domain Model: Replace abbreviations
- Openbaar Domain Model: Add missing dot at end of sentences
- Openbaar Domain Model: Replace http://schema.org with https://schema.org
- Openbaar Domain Model: Remove empty `ap-usage-note` values
- Gebied: PascalCase and CamelCase
- Gebied: Replace abbreviations
- Gebied: Add missing dot at end of sentences
- Gebied: Replace http://schema.org with https://schema.org
- Gebied: Remove empty `ap-usage-note` values

## 2025-03-13

- init toolchain 4
- splits config file
- vervang basis template oj3.j2 met ap2.j2 
    Deze template zou misschien terug kunnen gezet worden na aanpassing in the tooling

## 2025-06-10
- verwijder 0..* cardinaliteiten uit source waarvoor er geen eigenschap was in erkende standaard.
- vervang de heeftObstakel(Terreindeel -> Element) door een rol annotatie.
- Fysiek Object. niveau gebruik juiste interne benaming voor range integer
- hernoem EA package Model door BasisModel omdat anders er verwarring in de tooling is over welke package te gebruiken. 
  want de root noemt ook Model.
    
