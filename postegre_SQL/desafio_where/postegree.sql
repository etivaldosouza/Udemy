-- DESAFIO 1(WHERE)

- UM CLIENTE ESQUECEU A CARTEIRA NA LOJA! PRECISAMOS INFORMÁ-LO POR EMAIL;

-NO RG ENCONTRADO NA CARTEIRA SEU NOME É NANCY THOMAS. ENCONTRE O EMAIL DESTE CLIENTE

SELECT email from customer where first_name = 'Nancy' and last_name = 'Thomas'

obs:(os nomes a ser consultado tem q está igual ao escrito na tabela)

-- DESAFIO 2:

- UM CLIENTE QUER SABER SOBRE OQ É O FILME OUTLAW HANKY
- FORNEÇA A DESCRIÇÃO DESSE FILME PARA O CLIENTE

SELECT description FROM film WHERE title = 'Outlaw Hanki'


