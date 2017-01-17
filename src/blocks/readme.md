I'm calling the pieces of our long SPA '_blocks_', if for no particular reason
than they don't seem to specifically be 'views', since they take up sub-sections
of a view -- being just that main `<App>` component in this case -- and do
not really have generic properties like uniform height. However, we can pass those
down if it makes the most sense. In that case, architecture might look something
like:

```jsx
<App>
  <Block height={1} width={`100%`} bg={`block2.png`} />
  <Block height={1} width={`100%`} bg={`block3.png`} />
</App>
```

However, these blocks will need to be individualized for content and things like
transition type/properties. If we try to emulate the current layout, each div
within a 'block' would have its own transition duration and kind.

We could keep all of these properties in an array-like object, ex. `content`.

```jsx
  <Block `height, padding, etc...`>
      {content.map(current, index, arr) => {
          <Content img-src={current.img} transition={current.trans}>
              {current.copy}
          </Content>
      }}
  </Block>
```

Note: there should be no issue with making all of these view-only components
'pure' or 'presentational' as opposed to stateful and class-based. They
literally only take props and return html.
