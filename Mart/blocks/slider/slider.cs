.slider {
  overflow: hidden;
  margin-bottom: 100px;
}
.slider .slider__item {
  width: 100%;
  min-height: 600px;
  background-image: url(img/bg-img.png);
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
.slider .slider__item:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: rgba(0, 0, 2, 0.52);
}
.slider .slider__jumbotron {
  text-align: center;
  position: relative;
  padding: 10em 1em;
  z-index: 1;
  color: #fefefe;
  font-size: 2em;
}
@media (max-width: 425px) {
  .slider .slider__jumbotron {
    font-size: 1.125em;
  }
}
@media (min-width: 425px) and (max-width: 768px) {
  .slider .slider__jumbotron {
    font-size: 1.5em;
  }
}
.slider .slider__title {
  font-family: Roboto-Light;
  font-weight: 300;
  text-transform: uppercase;
}
.slider .slider__title--span {
  font-family: Roboto-Bold;
  color: #1abc9c;
  font-weight: 700;
}
.slider .slider__subtitle {
  font-family: OpenSans-Regular;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.slider .slider__subtitle--span {
  font-family: OpenSans-Semibold;
  color: #1abc9c;
  font-weight: 600;
}
.slider .btn {
  display: inline-block;
  font-family: Roboto-Regular;
  font-size: 0.5em;
  color: #fefefe;
  text-transform: uppercase;
  border: 2px solid #1abc9c;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  padding: 0.9em 1.8em;
}
.slider .btn:hover {
  background-color: #1abc9c;
  transition: 0.3s ease;
}
.slider-button {
  width: 104px;
  height: 104px;
  position: relative;
  cursor: pointer;
  background-color: #1abc9c;
}
.slider-button:hover {
  background-color: rgba(78, 198, 171, 0.65);
  transition: 0.2s ease;
}
.slider-button__arrow {
  position: absolute;
  top: 50%;
  height: 30px;
  width: 30px;
  border-top: 2px solid white;
  border-right: 2px solid white;
}
.slider-button__arrow.left {
  left: 25%;
  transform: translate3d(0, -50%, 0) rotate(45deg);
}
.slider-button__arrow.right {
  right: 25%;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
}
