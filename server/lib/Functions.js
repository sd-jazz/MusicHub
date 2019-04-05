sortByPriceDesc = () => {
    console.log("PRICE DESC")
      let priceDesc = this.state.listings.sort((a, b) => (b.price - a.price))
        this.setState({
            listings: priceDesc
        })
  }

  sortByPriceAsc = () => {
      console.log("PRICE ASC")
      let priceAsc = this.state.listings.sort((a, b) => (a.price - b.price))
        this.setState({
            listings: priceAsc
        })
  }

  sortByDateAsc = () => {
      console.log("DATE ASC")
      let dateAsc = this.state.listings.sort((a, b) => (a.time_stamp - b.time_stamp))
        this.setState({
            listings: dateAsc
        })
  }

  sortByDateDesc = () => {
      console.log("DATE DESC")
      let dateDesc = this.state.listings.sort((a, b) => (b.time_stamp - a.time_stamp))
        this.setState({
            listings: dateDesc
        })
  }
