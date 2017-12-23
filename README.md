# react-rating

Customise react components with react-rating component which can be used for adding ratings

#SetUp

```
npm install --save react-rating-component
```

#default Usage

```
<Rating />
```

#options passable

```
<Rating
ratingType={"circle" || "square"}
rating={0 - 10}
ratingName={"Name to be displayed" || URL of image to be shown}
image={false || true if URL is passed in ratingName prop}
textPosition={"right" || left}
tooltip={true || false}
maxRange={any number}
color={color of the tile to be displayed}
ratingValues = [array of 4 values in the order required]
/>
```
