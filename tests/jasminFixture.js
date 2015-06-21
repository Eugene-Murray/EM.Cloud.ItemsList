describe("helpers", function() {
  it("generateUUID success", function() {
    
    // Assign
    var expectedLength = 36;
    var actualLength;
    
    // Act
    var guid = helpers.generateUUID();
    actualLength = guid.length;
    
    // Assert
    expect(guid != null).toBe(true);
    expect(actualLength == expectedLength).toBe(true);
  });
});

describe("DataService", function() {
  it("getItems success", function() {
    
    // Assign
    var expectedLength = 2;
    var actualLength;
    
    // Act
    var items = DataService.getItems();
    actualLength = items.length;
    
    // Assert
    expect(items != null).toBe(true);
    expect(actualLength == expectedLength).toBe(true);
  });
});