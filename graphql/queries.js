import { gql } from "@apollo/client";

export const PRODUCT_BY_SLUG = gql`
  query catalogItemProductQuery(
    $productSlug: String!
    $shopId: ID!
    $filterSoldOutVariants: Boolean
  ) {
    catalogItemProductBySlug(
      productSlug: $productSlug
      shopId: $shopId
      filterSoldOutVariants: $filterSoldOutVariants
    ) {
      product {
        _id
        productId
        title
        slug
        description
        vendor
        isLowQuantity
        isSoldOut
        isBackorder
        imageUrls
        metafields {
          description
          key
          namespace
          scope
          value
          valueType
          __typename
        }
        pricing {
          currency {
            code
            __typename
          }
          displayPrice
          minPrice
          maxPrice
          __typename
        }
        shop {
          currency {
            code
            __typename
          }
          __typename
        }
        primaryImage {
          URLs {
            large
            medium
            original
            small
            thumbnail
            __typename
          }
          priority
          productId
          variantId
          __typename
        }
        media {
          priority
          productId
          variantId
          URLs {
            thumbnail
            small
            medium
            large
            original
            __typename
          }
          __typename
        }
        tags {
          nodes {
            name
            slug
            position
            __typename
          }
          __typename
        }
        variants {
          _id
          variantId
          title
          optionTitle
          index
          imageUrls
          pricing {
            compareAtPrice {
              displayAmount
              __typename
            }
            price
            currency {
              code
              __typename
            }
            displayPrice
            __typename
          }
          canBackorder
          inventoryAvailableToSell
          isBackorder
          isSoldOut
          isLowQuantity
          options {
            _id
            variantId
            title
            index
            pricing {
              compareAtPrice {
                displayAmount
                __typename
              }
              price
              currency {
                code
                __typename
              }
              displayPrice
              __typename
            }
            optionTitle
            canBackorder
            inventoryAvailableToSell
            isBackorder
            isSoldOut
            isLowQuantity
            media {
              priority
              productId
              variantId
              URLs {
                thumbnail
                small
                medium
                large
                original
                __typename
              }
              __typename
            }
            metafields {
              description
              key
              namespace
              scope
              value
              valueType
              __typename
            }
            primaryImage {
              URLs {
                large
                medium
                original
                small
                thumbnail
                __typename
              }
              priority
              productId
              variantId
              __typename
            }
            __typename
          }
          media {
            priority
            productId
            variantId
            URLs {
              thumbnail
              small
              medium
              large
              original
              __typename
            }
            __typename
          }
          metafields {
            description
            key
            namespace
            scope
            value
            valueType
            __typename
          }
          primaryImage {
            URLs {
              large
              medium
              original
              small
              thumbnail
              __typename
            }
            priority
            productId
            variantId
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

export const PRODUCTS = gql`
  query catalogItemsQuery(
    $shopId: ID!
    $tagIds: [ID]
    $searchText: String
    $booleanFilters: [CatalogBooleanFilter]
    $first: Int
    $last: ConnectionLimitInt
    $before: ConnectionCursor
    $after: ConnectionCursor
    $sortBy: CatalogItemSortByField
    $sortByPriceCurrencyCode: String
    $sortOrder: SortOrder
  ) {
    catalogItems(
      shopIds: [$shopId]
      tagIds: $tagIds
      searchText: $searchText
      booleanFilters: $booleanFilters
      first: $first
      last: $last
      before: $before
      after: $after
      sortBy: $sortBy
      sortByPriceCurrencyCode: $sortByPriceCurrencyCode
      sortOrder: $sortOrder
    ) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          _id
          ... on CatalogItemProduct {
            product {
              _id
              title
              slug
              description
              vendor
              isLowQuantity
              isSoldOut
              isBackorder
              imageUrls
              videoUrls
              metafields {
                description
                key
                namespace
                scope
                value
                valueType
              }
              shop {
                currency {
                  code
                }
              }
              pricing {
                currency {
                  code
                }
                displayPrice
                minPrice
                maxPrice
              }
              primaryImage {
                URLs {
                  thumbnail
                  small
                  medium
                  large
                }
              }
            }
          }
        }
      }
    }
  }
`;
