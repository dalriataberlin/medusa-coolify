import { createProductsWorkflow } from "@medusajs/medusa/core-flows"

// ...

const { result } = await createProductsWorkflow(container)
  .run({
    input: {
      products: [{
        variants: [{
          id: "variant_01K98EV6ST4YTHGSP28E9HMBNE",
          prices: [
            // default price
            {
              amount: 6.9,
              currency_code: "eur",
            },
            {
              amount: 6.5,
              currency_code: "eur",
              min_quantity: 6,
              max_quantity: 19,
            },
            {
              amount: 6,
              currency_code: "eur",
              min_quantity: 24,
            },
          ],
          // ...
        },
        {
          id: "variant_01K98EV59NF0B7KKMVQ18WQSST",
          prices: [
            // default price
            {
              amount: 7.9,
              currency_code: "eur",
            },
            {
              amount: 7.5,
              currency_code: "eur",
              min_quantity: 6,
              max_quantity: 19,
            },
            {
              amount: 7,
              currency_code: "eur",
              min_quantity: 24,
            },
          ],
          // ...
        },
        {
          id: "variant_01K98EV61PJNSB4ECBX56JS22A",
          prices: [
            // default price
            {
              amount: 5.9,
              currency_code: "eur",
            },
            {
              amount: 5.5,
              currency_code: "eur",
              min_quantity: 6,
              max_quantity: 19,
            },
            {
              amount: 5,
              currency_code: "eur",
              min_quantity: 24,
            },
          ],
          // ...
        },
        ],
      }],
      // ...
    },
  })
