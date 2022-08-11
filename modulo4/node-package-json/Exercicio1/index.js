// 1 - A) process.argv (Essa propriedade irá armazenar uma cópia, somente leitura, do valor original)

// 1 - B)

const idade = Number(process.argv[3] + 7) 

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá: ${idade}`)

